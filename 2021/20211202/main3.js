function csakParos(tomb) {
    let kivalasztottak = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            kivalasztottak.push(tomb[i])
        }
    }
    return kivalasztottak;
}

