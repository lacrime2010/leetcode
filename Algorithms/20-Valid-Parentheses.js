var isValid = function (s) {
    const regex = /\(\)|\[\]|\{\}/g

    while (s.match(regex)) {
        s = s.split('()').join('').split('[]').join('').split('{}').join('')
    }

    return !s
}
