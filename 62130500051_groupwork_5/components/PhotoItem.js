app.component('photo-item',{
    props: {
        imgs: {
            type: Array,
            require: true
        },
        isfound: {
            type: Boolean,
            require: true
        }
    },
    template: 
    /*html*/
    `
    <div v-for="(img,index) in imgs" class="flex my-5 items-center" :class="[img.isHidden ? 'hidden' : '']">
        <img class="w-52 mr-10 cursor-pointer" 
            :src="img.src" 
            :alt="img.id" 
            :key="img.id"
            @click="handleClickImg(img.src);">
        <p>{{ img.id }}</p>
        <i v-if="img.isActive" class="fas fa-heart ml-5 cursor-pointer" @click="showFavorite(index)" style="color: red;"></i>
        <i v-else class="far fa-heart ml-5 cursor-pointer" @click="showFavorite(index)"></i>
    </div>
    <p v-if="!isfound"> No photo. </p>
    `,
    methods: {
        handleClickImg(src){
            this.$emit('handle-click-img',src)
        },
        showFavorite(index){
            this.$emit('show-favorite',index)
        }
    }
})