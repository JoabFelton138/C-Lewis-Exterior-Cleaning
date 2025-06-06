import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    surName: z.string().min(2, "Surname must be at least 2 characters"),
    number: z.string()
            .min(11, "Number must be at least 11 digits")
            .regex(/^[0-9]+$/, "Number must contain only digits"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    postcode: z.string()
               .regex(/^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i, 
                "Enter a valid UK postode (e.g. WV8 1QY)"),
    area: z.string().min(5, "Area must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export const QuoteForm = () => {
    const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
                firstName: "",
                surName: "",
                number: "",
                email: "",
                address: "",
                postcode: "",
                area: "",
                message: "",
            }
        }
    );

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
            form.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="py-24">
            <Card className="p-4 sm:p-6 md:p-10 max-w-[800px] mx-auto space-y-4 sm:space-y-6 md:space-y-8 w-[90%] sm:w-[85%] md:w-full">
                <CardHeader className="text-[30px]">
                    Need a Quote?
                <CardDescription className="text-base">
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
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    First Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First Name" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={() => <FormMessage />}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="surName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Surname
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Surname" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="surName"
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Address" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="address"
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
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="area"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Area
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Area" {...field}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="min-h-[20px] mt-1">
                                        <FormField
                                            control={form.control}
                                            name="area"
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
                        <Button className="mt-6" 
                            type="submit"
                            onClick={form.handleSubmit(onSubmit)}
                            disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </Form>
                </CardContent>
            </Card>
        </section>
    );
}