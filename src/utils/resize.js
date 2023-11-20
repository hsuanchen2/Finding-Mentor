/**
 * 
 * @param {number} breakpoint 
 * @param {object} ref vue component ref
 */
export const handleResize = (breakpoint, ref) => {
    ref.value = breakpoint > window.innerWidth;
}
