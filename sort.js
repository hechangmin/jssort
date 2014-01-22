/**
 * 常见排序的JS 实现
 * @author hechangmin@mail.com
 * @date 2013.10
 */

var Sort = {
    //快速排序(递归)
    quick: function(arr) {

        var nLength = arr.length,
            pivotIndex = Math.floor(nLength / 2),
            pivot = arr.splice(pivotIndex, 1)[0],
            left = [],
            right = [];

        if (nLength < 2) {
            return arr;
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return arguments.callee(left).concat([pivot], arguments.callee(right));
    },

    //冒泡排序
    bubble: function(arr) {
        var nLength = arr.length;

        if (nLength < 2) {
            return arr;
        }

        for (var i = nLength - 1; i > 0; --i) {
            for (var j = 0; j < i; ++j) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    //选择排序
    selection: function(arr) {
        var nLength = arr.length;

        if (nLength < 2) {
            return arr;
        }

        for (var i = 0; i < nLength; i++) {
            var index = i;
            for (var j = i + 1; j < nLength; j++) {
                if (arr[j] < arr[index]) {
                    index = j;
                }
            }

            if (i !== index) {
                var temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
            }
        }

        return arr;
    },

    //插入排序
    insertion: function(arr) {
        var nLength = arr.length;

        if (nLength < 2) {
            return arr;
        }

        for (var i = 1; i < nLength; ++i) {
            var j = i,
                value = arr[i];

            while (j > 0 && arr[j - 1] > value) {
                arr[j] = arr[j - 1];
                --j;
            }

            if (j !== i) {
                arr[j] = value;
            }
        }

        return arr;
    },

    //希尔排序
    shell: function(arr) {
        var nLength = arr.length;

        if (nLength < 2) {
            return arr;
        }

        for (var step = nLength >> 1; step > 0; step >>= 1) {
            for (var i = 0; i < step; ++i) {
                for (var j = i + step; j < nLength; j += step) {
                    var k = j,
                        value = arr[j];
                    while (k >= step && arr[k - step] > value) {
                        arr[k] = arr[k - step];
                        k -= step;
                    }
                    arr[k] = value;
                }
            }
        }
        return arr;
    }
};