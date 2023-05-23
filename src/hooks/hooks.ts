import { useEffect, useState } from 'react'
import { Buffer } from 'buffer'
import { supabase } from '../api/supabase'

export const usePageScrollTop = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
}

export const useJoinDao = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const getInvitationToken = (daoName: string) => {
    const data = {
      dao: daoName,
      nonce: Date.now() + Math.round(Math.random() * 1000),
    }
    return Buffer.from(JSON.stringify(data)).toString('base64')
  }

  const joinDao = async () => {
    const daoName = 'jocelyn'

    try {
      setIsSubmitting(true)
      const token = getInvitationToken(daoName)
      const { error } = await supabase.from('dao_invite').insert({
        dao_name: daoName,
        sender_username: 'jocelyn-web',
        is_recipient_sent: true,
        token,
        token_expired: false,
      })
      if (error) {
        throw new Error(error.message)
      }

      window.open(`https://app.gosh.sh/o/${daoName}/onboarding?token=${token}`)
    } catch (e: any) {
      console.error(e.message)
      alert(e.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, joinDao }
}

export const useCreateSponsor = () => {
  const createSponsor = async (data: { name?: string; email: string }) => {
    const { name, email } = data
    const { error } = await supabase.from('jocelyn_sponsor').insert({
      name,
      email,
    })
    if (error) {
      throw new Error(error.message)
    }
  }

  return { createSponsor }
}

export const useSubmitProject = () => {
  const submitProject = async (data: {
    name: string
    email: string
    company: string
    description: string
  }) => {
    const { name, email, company, description } = data
    const { error } = await supabase.from('jocelyn_project').insert({
      name,
      email,
      company,
      description,
    })
    if (error) {
      throw new Error(error.message)
    }
  }

  return { submitProject }
}
