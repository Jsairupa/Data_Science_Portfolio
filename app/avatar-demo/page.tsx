"use client"

import { useState } from "react"
import { RealisticAvatar } from "@/components/realistic-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AvatarDemo() {
  const [speaking, setSpeaking] = useState(false)
  const [pointing, setPointing] = useState(true)
  const [message, setMessage] = useState("Hello! I'm your realistic avatar.")
  const [size, setSize] = useState(300)

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Realistic Human Avatar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Avatar Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center min-h-[400px] bg-gradient-to-b from-blue-50 to-purple-50">
            <RealisticAvatar
              speaking={speaking}
              pointing={pointing}
              message={message}
              className={`w-[${size}px]`}
              style={{ width: size + "px" }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="basic">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Controls</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="speaking-toggle">Speaking</Label>
                    <Switch id="speaking-toggle" checked={speaking} onCheckedChange={setSpeaking} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="pointing-toggle">Pointing</Label>
                    <Switch id="pointing-toggle" checked={pointing} onCheckedChange={setPointing} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message-input">Speech Message</Label>
                  <Input
                    id="message-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter speech message"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size-slider">Avatar Size: {size}px</Label>
                  <Slider
                    id="size-slider"
                    min={100}
                    max={500}
                    step={10}
                    value={[size]}
                    onValueChange={(value) => setSize(value[0])}
                  />
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="pt-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    The avatar features realistic facial proportions, detailed features, and natural expressions.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Anatomically correct facial structure</li>
                    <li>• Realistic eye movement with blinking</li>
                    <li>• Natural hair styling with highlights</li>
                    <li>• Proper skin tones with subtle shading</li>
                    <li>• Animated mouth for speaking</li>
                    <li>• Realistic arm and hand for pointing</li>
                  </ul>
                  <Button onClick={() => setSpeaking(!speaking)}>
                    {speaking ? "Stop Speaking" : "Start Speaking"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          This realistic human avatar is built with SVG and React, featuring natural animations and expressions.
        </p>
      </div>
    </div>
  )
}
