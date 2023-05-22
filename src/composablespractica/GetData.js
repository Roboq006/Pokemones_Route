import axios from 'axios';
import {ref} from 'vue';


export const UseGetData = () =>{
    const data = ref(null);
    const errorData = ref(null);
    const loading = ref(true);
    const getData = async(url) => {
        loading.data = true;
        try{
            const res = await axios.get(url);
            data.value = res.data

        }
        catch (error){
            errorData.value='Error de servidor'
            //console.log(error)

        }
        finally{
            loading.value=false;

        }
    }

    return {

        getData,
        data,
        loading,
        errorData,
        

    }


}