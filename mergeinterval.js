var merge = function(nums) {
    var res=[];
    res = nums.slice().sort(function(a, b) {
            return a[0] < b[0];
        }),
        i = 0;

    while(i < res.length - 1) {
        var current = res[i],
            next = res[i+1];

        
        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
            
            res.splice(i+1, 1);
        } else {
            
            i++;
        }
    }
    return res;
};
