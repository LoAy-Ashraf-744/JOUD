import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  agentNeed: z.enum(["fashion", "product", "ecommerce", "all"]),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const WaitlistForm = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xzznkarz");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useReactHookForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      agentNeed: "fashion",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // Manually trigger Formspree submission with data
    const response = await fetch("https://formspree.io/f/xzznkarz", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify(values)
    });

    if (response.ok) {
        toast({
          title: t("form.success.title"),
          description: t("form.success.description"),
        });
        form.reset();
    } else {
        toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive"
        });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="waitlist" className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-radial from-desert-sand/10 via-transparent to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("form.title")} <span className="text-gradient-blue-gold">{t("form.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("form.subtitle")}
            </p>
          </div>

          <div className="liquid-glass-card animate-slide-in-up">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.name")} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.namePlaceholder")}
                          className="liquid-glass border-2 border-white/10 focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.email")} *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("form.emailPlaceholder")}
                          className="liquid-glass border-2 border-white/10 focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.company")} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.namePlaceholder")} // Using same placeholder or new one if needed
                          className="liquid-glass border-2 border-white/10 focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agentNeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.agentNeed")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="liquid-glass border-2 border-white/10 focus:border-gold">
                            <SelectValue placeholder={t("form.agentNeedPlaceholder")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="liquid-glass border-2 border-white/10">
                          <SelectItem value="fashion">{t("form.agentNeed.fashion")}</SelectItem>
                          <SelectItem value="product">{t("form.agentNeed.product")}</SelectItem>
                          <SelectItem value="ecommerce">{t("form.agentNeed.ecommerce")}</SelectItem>
                          <SelectItem value="all">{t("form.agentNeed.all")}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.message") || "Message"}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("form.messagePlaceholder") || "Tell us more about your project..."} 
                          className="resize-none liquid-glass border-2 border-white/10 focus:border-gold" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-blue-gold hover:opacity-90 glow-warm text-lg py-6 rounded-xl text-background font-semibold"
                >
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {t("form.disclaimer")}
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};