export const existIndex = (array: Array<any>, index: any): boolean => {
    if ((typeof index == 'number')) {
        return ((Number.isInteger(index)) &&
                (index >= 0) &&
                (index <= array.length - 1));
    } else {
        return false;
    }
}

export const isNight = (): boolean => {
    let util_time = new Date().getHours();
    return ((util_time < 6) || (util_time >= 18));
}