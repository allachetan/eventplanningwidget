import { Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Widget() {

    return (
        <div className="fixed z-50 bottom-0 right-0 mb-4 mr-4 flex flex-col gap-4 items-end">
            {
                /*
                <div className="bg-white h-[600px] w-80 rounded-lg flex flex-col">
                <div className="bg-yellow-200 p-6 w-full flex flex-col gap-2">
                    <div className="border-2 border-gray-400 flex gap-4">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
                */
            }
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

            <button
                className="bg-yellow-200 w-14 h-14 rounded-full flex justify-center p-0"
                onClick={() => console.log('clicked')}
            >
                <Mail className="w-8 h-8 m-auto text-black" />
            </button>
        </div>
    )
}

export default Widget;
