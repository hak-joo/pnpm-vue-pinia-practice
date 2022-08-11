import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useStore = defineStore('store', () => {
    const user = ref({
        name: '',
    });
    const setUser = (name: string) => {
      user.value.name = name;
    };
    if(localStorage.getItem("user") && user.value) {
        user.value = localStorage.getItem("user");
    }

    watch(
        user,
        (value) => {
            localStorage.setItem("user",  JSON.stringify(value));
        }
    )
 
    return {
        user, setUser
    };
  });