import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SuccessDialog } from "./SuccessDialog";

const formSchema = z.object({
    fullName: z.string()
            .min(3, "Name must be at least 2 characters and separated by a space")
            .regex(/^[A-Za-z]{2,} [A-Za-z]{2,}$/, "Please enter your full name separated by a space"),
            number: z.string()
            .min(11, "Number must be at least 11 digits")
            .regex(/^[0-9]+$/, "Number must contain only digits"),
    email: z.string().email("Invalid email address"),
    postcode: z.string()
               .regex(/^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i, 
                "Enter a valid UK postode (e.g. WV8 1QY)"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export const QuoteForm = () => {
    const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
                fullName: "",
                number: "",
                email: "",
                postcode: "",
                message: "",
            }
        }
    );

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
            form.reset();
            setShowSuccessDialog(true);
        } catch (error) {
            console.error(error);
        }
    };

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    
    return (
        <section id="quote-form" className="py-24">
            <Card className="p-4 sm:p-6 md:p-10 max-w-[700px] mx-auto space-y-4 sm:space-y-6 md:space-y-8 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
                <CardHeader className="text-center p-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 uppercase tracking-wider">
                    Need a Quote?
                    <CardDescription className="text-sm sm:text-base font-normal normal-case tracking-normal mt-2">
                        If you would like a free quote, 
                        fill out the form and i'll get back to you!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className="space-y-4 sm:space-y-6 md:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Full Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Full Name" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={() => <FormMessage />}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={() => <FormMessage />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Number" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="number"
                                            render={() => <FormMessage />}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="postcode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Postcode
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Postcode" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="postcode"
                                            render={() => <FormMessage />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Message" {...field}/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <div className="min-h-[20px] mt-1">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={() => <FormMessage />}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button className="mt-6 mb-2 flex justify-center hover:bg-primary/90 hover:scale-105 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 mx-auto" 
                            type="submit"
                            size="lg"
                            onClick={form.handleSubmit(onSubmit)}
                            disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                        </Button>
                    </Form>
                </CardContent>
            </Card>
            <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}/>
        </section>
    );
}