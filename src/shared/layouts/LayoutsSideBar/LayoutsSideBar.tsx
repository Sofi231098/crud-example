import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar"; 
import { AppSideBar } from "@/shared/components/AppSideBar/AppSideBar";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider> //contexto, envuelve a AppSideBar
            <AppSideBar /> //estructura de la barra lateral- side bar
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}