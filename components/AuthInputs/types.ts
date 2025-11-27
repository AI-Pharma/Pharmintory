export interface AuthInputProps {
    label: string
    hintText?: string
    required: boolean
    options?: PharmacyProperties[]
}

export interface PharmacyProperties {
    name: string
    region: string
    location: string
}
