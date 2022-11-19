import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import { VTextField } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    components:{
        VTextField
    }
});

export default new Vuetify({
    icons:{
        iconfont:'md' || 'fa',
    },
    theme:{dark:true}
});
