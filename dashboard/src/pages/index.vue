<template>
  
  <v-app>
    <v-app-bar class="px-30" color="teal-darken-4"  density="compact" flat>
      <v-spacer></v-spacer>
      <v-tabs v-model="selectedTab" centered color="teal-lighten-2">

        <v-tab v-for="link in links" :key="link"> {{ link }} </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>


    <!--Container-->
    <v-main>
      <v-container fluid>
        <v-row>
          <!--left Col-->
          <v-col cols="12" sm="2"> </v-col>
          <!--Main col-->
          <v-col cols="12" sm="8">
            <v-sheet v-if="selectedTab == 0" class="pa-4" min-height="70vh" rounded="lg">
              
              <h2> Apps List: </h2>
              <div>
                <v-data-table v-if="groupedData":headers="headers":items="groupedData" item-value="app" 
                  v-model:expanded="expanded"
                  show-expand >

                  <template v-slot:header.app="{ column }">
                    {{ column.title.toUpperCase() }}
                  </template>

                  <template v-slot:expanded-row= "{ columns, item}">
                    <tr>
                      <td :colspan="columns.length">
                        <div style="padding: 15px">
              
                          The country that generated the most revenu for
                          {{ item.app }} is {{  useGetBestCountry(item) }}  
                          <br>

                            <BarChart class="d-flex mx-auto my-0":data="[
                              item.totalRevenusByCountryUS || 0,
                              item.totalRevenusByCountryUK || 0,
                              item.totalRevenusByCountryFR || 0,
                              item.totalRevenusByCountryAU || 0,
                              item.totalRevenusByCountryJP || 0,
                              item.totalRevenusByCountryCN || 0,
                            ]"
                            />
 
                          


                          <br>
                          <v-row>
                            <v-col>
                                Total ads views: <b>{{ item.totalViews }}</b> <br>
                                Total conversions: <b>{{ item.totalConversions }}</b> <br>
                                Conversions %:
                                <b>
                                  {{ ((item.totalConversions * 100) / item.totalViews).toFixed(2) }}
                                    %
                                  </b><br>

                                Total de revenus:
                                <b>{{ useFormatRevenus(item.totalRevenus) }}</b>

                            </v-col>

                            <v-col>
                              Total banner revenus:
                              <b> {{  useFormatRevenus(item.banner) }}</b><br>

                                Total full-screen revenus:
                              <b> {{  useFormatRevenus(item.fullscreen) }}</b><br>

                                     Total video revenus:
                              <b> {{  useFormatRevenus(item.video) }}</b><br>

                                     Total rewarded revenus:
                              <b> {{  useFormatRevenus(item.rewarded) }}</b><br>
                            </v-col>
                          </v-row>
                        </div>
                      </td> 
                    </tr>
                  </template>
                </v-data-table>
              </div>
            </v-sheet>

            <v-sheet v-else class="pa-2 pt-4" min-height="70vh" rounded="lg">
              page 1
            </v-sheet>

          </v-col>
          <!--Right col-->
          <v-col cols="12" sm="2"> </v-col>
        </v-row>
      </v-container>
    </v-main>


  </v-app>
</template>

<script lang="ts" setup>

    //Imports
  import {ref, watch, onMounted} from "vue";
  import useGroupApps from "../functions/useGroupApps.ts";
  import useFormatRevenus from "@/functions/useFormatRevenus.ts";
  import useGetBestCountry from "@/functions/useGetBestCountry.ts";
  import BarChart from "@/components/BarChart.vue";


  //Variables
  let selectedTab = ref(0);
  const links = ref(["Dashboard", "About"]);
  let apiResult = ref();
  let groupedData = ref([]);
  let expanded = ref([]);

  /**
   * Lister les differents titres des colonnes qu on veut afficher ds le tableau
   */
  const headers = ref([
    {title: "App", key: "app"},
    {title: "US", key: "totalRevenusByCountryUS"},
    {title: "UK", key: "totalRevenusByCountryUK"},
    {title: "FR", key: "totalRevenusByCountryFR"},
    {title: "JP", key: "totalRevenusByCountryJP"},
    {title: "CN", key: "totalRevenusByCountryCN"},
    {title: "AU", key: "totalRevenusByCountryAU"},
    {title: "Total", key: "totalRevenus"},
    {title: "", key:"data-table-expand"},
  ]);

  //Life Cycle
  onMounted(async () =>{
    fetchMonetizationApi();
  })

  //Fonctions
  watch(apiResult,(newValue) => {
    groupedData.value = useGroupApps(newValue.data);
  });

  //Api
  const apiUrl = 'https://www.anthony-cardinale.fr/_placeholder/monetization-api.json';

  const fetchMonetizationApi = async () => {
    await fetch(apiUrl)
      .then(response => response.json())
      .then(data => apiResult.value = data);
  }
</script>
