app.component('photo-view',{
    props: {
        isShowImg: {
            type: Boolean,
            require: true
        },
        currentimg: {
            type: String,
            require: true
        },
    },
    template:
    /*html*/
    `
        <div class="container flex flex-col h-full">
            <i class="fas fa-window-close text-white self-end justify-self-center cursor-pointer mt-10 text-3xl" @click="handleCloseImg"></i>
            <div class="flex justify-center h-full items-center">
                <img :src="currentimg" class="w-2/4">
            </div>
        </div>
    `,
    methods: {
        handleCloseImg(){
            this.$emit('handle-close-img');
        }
    }
    
})