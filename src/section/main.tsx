import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import ResponsivePlayer from "./../components/ResponsivePlayer";

type Props = {}

const Main = (props: Props) => {
    return (
        <div>
            <div className="flex ">
                <div className="m-5" >
                    <div className="text-4xl	font-bold ">
                        Rapid REST API Visualization: Test in Seconds
                    </div>
                    <div className="text-2xl ">
                        Experience lightning-fast REST API visualization with our intuitive platform. In just seconds, you can gain comprehensive insights into your API endpoints, facilitating efficient testing and analysis.


                    </div>
                    <div>
                        <Link href="/guestuser"><Button>Guest User</Button></Link>

                        <Button>Demo Video</Button>

                    </div>
                </div>
                <div className="border-2">
                    <ResponsivePlayer/>
                    {/* <iframe width="560" height="315" src="htt://www.youtube.com/embed/ksZpu1s1LV0?si=7ZnkBwNLqYC7mQom" title="YouTube video player" allow=" " ></iframe> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Main