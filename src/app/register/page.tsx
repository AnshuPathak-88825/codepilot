"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type Props = {};

const Register = (props: Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }
    return (
        <div className="flex h-screen items-center justify-center">

            <div className="w-1/4 ">
                <div className="m-auto">
                    <div className="m-auto border-2 items-center">Create account</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                            />
                        </div>
                        <Button disabled={isLoading}>Sign In with Email</Button>
                    </div>
                </form>
                <div className="relative mb-2 mt-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <Button
                    className="w-full mt-2 mb-2"
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                >
                    <FaGithub className="m-2" size={16} />
                    GitHub
                </Button>
                <Button
                    className="w-full mt-2 mb-2"
                    variant="outline"
                    type="button"
                    disabled={isLoading}
                >
                    <FaGoogle className="m-2" size={16} />
                    Google
                </Button>
                <div className="relative mt-2 mb-2 cursor-pointer">
                    <div className="relative flex justify-center text-xs uppercase underline">
                        <span className="bg-background px-2 text-muted-foreground">
                            Don't have an account? Sign Up{" "}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
{
    /* <div>
              <div className="w-1/4 flex flex-col m-auto  h-screen justify-items-center  border-" >
                  hello
                  <form onSubmit={onSubmit}>
                      <div className="grid gap-2">
                          <div className="grid gap-1">
                              <Label className="sr-only" htmlFor="email">
                                  Email
                              </Label>
                              <Input
                                  id="email"
                                  placeholder="name@example.com"
                                  type="email"
                                  autoCapitalize="none"
                                  autoComplete="email"
                                  autoCorrect="off"
                                  disabled={isLoading}
                              />
                          </div>
                          <Button disabled={isLoading}>
  
                              Sign In with Email
                          </Button>
                      </div>
                  </form>
                  <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                              Or continue with
                          </span>
                      </div>
                  </div>
                  <Button variant="outline" type="button" disabled={isLoading}>
  
                      GitHub
                  </Button>
              </div>
          </div> */
}
