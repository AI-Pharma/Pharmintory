export interface AuthInputProps {
    label: string
    hintText?: string
    options?: string[]
    textValue?: string
    required?: boolean
    value?: PharmacyProperties | null
    onChange?: (value: string) => void
    onChangePharmacy?: (pharmacy: PharmacyProperties | null) => void
}

export interface PharmacyProperties {
    name: string
    region: string
    location: string
}
