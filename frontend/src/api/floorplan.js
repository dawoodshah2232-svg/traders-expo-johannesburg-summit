import { api } from './client'

// Booths that are taken: [{ boothno, status, approved, company_name, company_url, company_logo }]
export const getBookedBooths = () => api('/floorplan').then(res => res.data)

// FormData: name, email, phone, company, referal_code, boothno, paymenttype, networktype, file
export const reserveBooth = formData => api('/floorplan', { method: 'POST', body: formData })

// Admin
export const listBookings = params => api('/admin/floorplans?' + new URLSearchParams(params))
export const updateBooking = (id, formData) => api(`/admin/floorplans/${id}`, { method: 'POST', body: formData })
export const deleteBooking = id => api(`/admin/floorplans/${id}`, { method: 'DELETE' })
export const downloadProof = id => api(`/admin/floorplans/${id}/proof`, { raw: true }).then(res => res.blob())
