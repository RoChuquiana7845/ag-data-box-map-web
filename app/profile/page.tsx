"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/lib/hooks/use-auth"
import { getProfile } from "@/lib/services/auth"
import { fadeIn } from "@/lib/config/animations"
import type { User } from "@/lib/types/auth"

export default function ProfilePage() {
  const { user: initialUser, token } = useAuth()
  const [user, setUser] = useState<User | null>(initialUser)

  useEffect(() => {
    async function fetchProfile() {
      try {
        if (token) {
          const profile = await getProfile(token)
          setUser(profile)
        }
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchProfile()
  }, [token])

  return (
    <div className="container py-10">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            {user && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                  <p className="text-lg">{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                  <p className="text-lg capitalize">{user.role}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

