import { Mail, CalendarDays, ScrollText } from "lucide-react";
import testlogo from "../../assets/testlogo.png";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

function Widget() {

    return (
        <div className="fixed z-50 bottom-0 right-0 mb-8 mr-8 flex flex-col gap-4 items-end">
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

            <div className="bg-white min-h-[600px] w-[350px] rounded-lg flex flex-col shadow-xl overflow-hidden">
                <div className="bg-amber-100 p-6 px-8 flex flex-col gap-2 items-center">
                    <div className="border-[1px] border-gray-300 bg-white/50 rounded-xl flex gap-1 overflow-hidden w-fit">
                        <div className="flex gap-2 py-1.5 px-3 items-center justify-center bg-amber-200 rounded-xl m-0.5">
                            <CalendarDays className="w-4" />
                            <p className="text-sm">Consultation</p>
                        </div>

                        <div className="flex gap-2 py-1.5 px-3 items-center justify-center rounded-xl m-0.5">
                            <ScrollText className="w-4" />
                            <p className="text-sm">Answers</p>
                        </div>
                    </div>

                    <img src={testlogo} className="h-24 mt-4" />

                    <div className="flex flex-col pt-2">
                        <p className="font-medium text-2xl">Free Event Consultation</p>
                        <p className="font-regular text-xs text-gray-600">We usually respond within 24 hours.</p>
                    </div>
                </div>

                <div className="flex flex-col py-8 px-6 gap-4">
                    <div className="flex flex-col w-full items-start gap-1.5">
                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                        <Input type="text" id="name" placeholder="Enter your name" />
                    </div>

                    <div className="flex flex-col w-full items-start gap-1.5">
                        <Label htmlFor="email" className="text-gray-700">Email address</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>

                    <div className="flex flex-col w-full items-start gap-1.5">
                        <Label htmlFor="tel" className="text-gray-700">Phone number</Label>
                        <Input type="tel" id="tel" placeholder="Optional" />
                    </div>

                    <Button className="shadow-md hover:bg-amber-300 mt-4">Continue</Button>

                </div>
            </div>

            <button
                className="bg-yellow-200 w-14 h-14 rounded-full flex justify-center p-0 shadow-lg"
                onClick={() => console.log('clicked')}
            >
                <Mail className="w-[28px] h-[28px] m-auto text-black" />
            </button>
        </div>
    )
}

export default Widget;
