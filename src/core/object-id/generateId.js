import ObjectID from 'bson-objectid'

export const generator = {
    generate() {
        return ObjectID.generate()
    }
}

export default function generateId() {
    return generator.generate()
}
