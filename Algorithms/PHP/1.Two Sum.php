class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer[]
 */
function twoSum($nums, $target) {
    $arr=[];
    
    foreach ($nums as $k => $v) {
        $re = $target-$v;
        
        if (in_array($re, $nums)) {
            $k1 = array_search($re,$nums);
            
            if ($k!=$k1) {
                return [$k, $k1];
            }
        }
        
    }
}
}