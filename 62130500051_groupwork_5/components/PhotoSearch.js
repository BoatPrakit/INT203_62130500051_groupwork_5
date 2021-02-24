app.component('photo-search',{
    props: {
        isshowsearchbox: {
            type: Boolean,
            require: true
        },
        imglength: {
            type: String,
            require: true
        }
    },
    template: 
    /*html*/
    `
        <h1 class="text-2xl font-bold text-center">Photo Gallery({{ imglength }})</h1>
        <div class="w-full flex mt-5 h-8 justify-between">
            <i class="fas fa-search cursor-pointer" @click="showSearchBox" v-if="!isshowsearchbox"></i>
            <input v-model="keywordForSearch" @keyup.enter="findResult" type="text" v-if="isshowsearchbox" class="w-auto border-2 border-blue-400 w-full">
            <button @click="handleCancel" v-if="isshowsearchbox" class="bg-blue-400 text-white p-1 ml-3 rounded">cancel</button>
        </div>
    `,
    data(){
        return {
            keywordForSearch: ''
        }
    },
    methods: {
        handleCancel(){
            this.$emit('handle-cancel')
        },
        findResult(){
            this.$emit('find-result',this.keywordForSearch)
        },
        showSearchBox(){
            this.$emit('show-search-box')
        }
    }
    
    
})