import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
formData: {
name: "",
email: "",
subject: "",
message: "",
},
status: "idle",
error: null,
successMessage: null,
}

export const submitContactForm = createAsyncThunk("contact/submitForm", async (formData, { rejectWithValue }) => {
try {
const response = await fetch("http://127.0.0.1:5000/api/contact", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
})

const data = await response.json()

if (!response.ok) {
    return rejectWithValue(data.error || "Failed to submit form")
}

return data
} catch (error) {
return rejectWithValue("Network error. Please try again later.")
}
})

const contactSlice = createSlice({
name: "contact",
initialState,
reducers: {
updateFormField: (state, action) => {
    const { field, value } = action.payload
    state.formData[field] = value
},
resetForm: (state) => {
    state.formData = initialState.formData
    state.status = "idle"
    state.error = null
},
clearMessages: (state) => {
    state.error = null
    state.successMessage = null
},
},
extraReducers: (builder) => {
builder
    .addCase(submitContactForm.pending, (state) => {
    state.status = "loading"
    state.error = null
    state.successMessage = null
    })
    .addCase(submitContactForm.fulfilled, (state, action) => {
    state.status = "succeeded"
    state.successMessage = action.payload.message
    state.formData = initialState.formData
    })
    .addCase(submitContactForm.rejected, (state, action) => {
    state.status = "failed"
    state.error = action.payload
    })
},
})

export const { updateFormField, resetForm, clearMessages } = contactSlice.actions
export default contactSlice.reducer
