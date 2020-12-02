"use strict";
export default   {

    search(data,target){
        for(let i = 0; i < data.length; i ++)
            if(data[i] == target)
              return i;
         return -1;
    }

}
