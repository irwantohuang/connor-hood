import { defineStore } from "pinia";
import { ref } from "vue";

interface PersonalInformationType {
    fullName: string,
    idCard: string,
    idCardPhoto: File | null,
    npwp: string,
    npwpPhoto: File | null,
    phoneNumber: string
}

interface CompanyInformationType {
    companyName: string,
    pic: string,
    email: string 
}

interface BankInformationType {
    bankName: string,
    accountNumber: string,
    accountName: string
}

export const useFormStore = defineStore('form', () => {
    const personalInformation = ref<PersonalInformationType>({
        fullName: '',
        idCard: '',
        idCardPhoto: null,
        npwp: '',
        npwpPhoto: null,
        phoneNumber: ''
    })

    const companyInformation = ref<CompanyInformationType>({
        companyName: '',
        pic: '',
        email: '' 
    })

    const bankInformation = ref<BankInformationType>({
        bankName: '',
        accountNumber: '',
        accountName: ''
    })

    const signature = ref<string | null>(null);
    const errorMessage = ref<string | null>(null);

    const validateForm = (message: string) => {
        const formValues = {
            ...personalInformation.value,
            ...companyInformation.value,
            ...bankInformation.value,
        };
    
        const isEmpty = Object.values(formValues).some(value => {
            return value === "" || value === null || value === undefined;
        });
    
        if (isEmpty) {
            errorMessage.value = message;
            return false;
        }
    
        errorMessage.value = null;
        return true;
    };
    


    const setSignature = (sign: string | null) => signature.value = sign;

    return {
        personalInformation,
        companyInformation,
        bankInformation,
        signature,
        setSignature,
        validateForm,
        errorMessage
    }
})