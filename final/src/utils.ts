export const isNight = (): boolean => {
    let util_time = new Date().getHours();
    return ((util_time < 6) || (util_time >= 18));
}