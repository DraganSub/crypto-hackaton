export function numberFormatter(num: number) {
    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
    }
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
}

export function dateFormatter(date: string) {
    const dateObject = new Date(date);
    const dateObjectNow = new Date();

    if (dateObject.getHours() < dateObjectNow.getHours()) {
        return `${Math.round(dateObjectNow.getHours() - dateObject.getHours())} hours ago`;
    }
    else if (dateObject.getHours() > dateObjectNow.getHours()) {
        return `a day ago`;
    }
    else {
        return dateObject.toLocaleDateString('en-GB');
    };
}

