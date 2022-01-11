export function cs(init) {
    return crinusMuto(() => init, (n) => cs(n + init))
}

export function cz() {
    return crinusMuto(() => -1, (_n) => cz())
}

function crinusMuto(brow, color) {
    function cc(n?) {
        if (typeof (n) === 'undefined') {
            return brow()
        }
        return color(n)
    }

    return cc
}
