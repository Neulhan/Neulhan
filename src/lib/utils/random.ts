export function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export function getRandomDirection() {
    const angleInDegrees = Math.random() * 360
    return (angleInDegrees * Math.PI) / 180
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomColor(array: string[]) {
    return array[Math.floor(Math.random() * array.length)]
}
