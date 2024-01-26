<template>
<div class="flex flex-col container mt-5 mb-5">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          First Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Last Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          University
                        </th>
                      </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                      <tr v-for="item in veri" :key="item.id">
                        <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {{item.firstName}}
                        </td>
                        <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {{item.lastName}}
                        </td>
                        <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {{item.email}}
                        </td>
                        <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {{item.phone}}
                        </td>
                        <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {{item.university}}
                        </td>
                      </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      veri : [],
    };
  },
  methods: {
    ...mapActions(["logout"]),
    async _logout() {
      await this.logout();
    },
    getData(){
      axios.get('https://dummyjson.com/users')
      .then(response => {
        this.veri = response.data.users;
        console.log(response.data.users)
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  mounted(){
    this.getData();
  }
};
</script>
