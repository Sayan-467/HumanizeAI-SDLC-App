'use server'

import { redirect } from 'next/navigation'

export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // In a real application, you would validate the credentials here
    console.log('Login attempt:', email, password)

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For demo purposes, always succeed
    redirect('/projects')
}

export async function signup(formData) {
  const officialEmail = formData.get('officialEmail')
  const officeEmail = formData.get('officeEmail')
  const contact = formData.get('contact')
  const purpose = formData.get('purpose')

  // In a real application, you would save this data and send a verification email
  console.log('Signup data:', { officialEmail, officeEmail, contact, purpose })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // For demo purposes, always succeed
  redirect('/verify-email')
}

export async function setPassword(formData) {
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  // In a real application, you would validate and save the password here
  console.log('Setting password:', password, confirmPassword)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // For demo purposes, always succeed
  redirect('/projects')
}

export async function logout() {
  // In a real application, you would invalidate the session here

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  redirect('/')
}

export async function addProject(formData) {
  const name = formData.get('name')
  const description = formData.get('description')

  // In a real application, you would save the new project here
  console.log('Adding new project:', { name, description })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  redirect('/projects')
}

