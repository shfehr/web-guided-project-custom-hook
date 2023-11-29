
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue, cb) => {

    const [values, setValues] = useLocalStorage(key, initialValue)
    

    const clearForm = () => {
        setValues(initialValue)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        cb();
    }
    const handleChanges = evt => {
        localStorage.setItem([evt.target.name], evt.target.value)
        setValues({...values, [evt.target.name]: evt.target.value})
    }

    return [values, clearForm, handleChanges, handleSubmit]
    
}