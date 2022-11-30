const { createApp } = Vue;
createApp({
    data() {
        return {
            listEmail: [],
            tempListEmail: [],
            ajaxCounter: 0,

        };
    },
    methods: {
        fetchData() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp);
                    // nel console log richiamare data.response e d pusharlo
                    console.log("Email: " + resp.data.response);
                    this.tempListEmail.push(resp.data.response);
                    this.ajaxCounter++;
                    if (this.ajaxCounter === 10) {
                        this.listEmail = this.tempListEmail;
                    }
                });
        },
    },
    // nel mounted devo fare un ciclo dove in teoria 
    // se i < 10, i++ 
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.fetchData();
        };
    },
}).mount("#app")


