const offsets = {
    'new-york': -300,
    'kyiv': 120,
    'tokyo': 540,
    'london': 0,
    'paris': 60,
    'beijing': 480
}

const getTime = cityId => {
    const localDate = new Date();
    const offset = localDate.getTimezoneOffset() + offsets[cityId];
    return new Date(+localDate + (offset * 60 * 1000))
}

export default getTime;