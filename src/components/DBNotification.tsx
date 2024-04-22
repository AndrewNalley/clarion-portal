import { useState, useEffect } from 'react'
import supabase from '../db/supabaseClient'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';


const DBNotification = () => {
    const [notification, setNotification] = useState<RealtimePostgresChangesPayload<{ [key: string]: any; }> | null>(null)

    useEffect(() => {
        // subscribe to all db changes
        const dbNotifications = supabase.channel('custom-all-channel')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'students' },
                (payload) => {
                    console.log( `Change received! => ${payload}`)
                    setNotification(payload)
                }
            )
            .subscribe()

        return () => {
            // Clean up the subscription when component unmounts
            dbNotifications.unsubscribe()
        }
    }, []) // Effect runs only once on component mount



    return (
        <section>
            <h3>{notification ? JSON.stringify(notification) : "No notifications"}</h3>
        </section>
    )
}

export default DBNotification