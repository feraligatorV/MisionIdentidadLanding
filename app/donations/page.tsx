"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, CreditCard, Smartphone, Building, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

function DonationsPageContent() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const { t } = useLanguage()
  useEffect(() => void window.scrollTo({ top: 0, behavior: "smooth" }), [])
  const predefinedAmounts = [25, 50, 100, 250, 500]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-neutral-200 hover:text-amber-400 bg-neutral-900/60">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("donations.backToHome")}
              </Button>
            </Link>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-amber-700/20 border border-amber-600/30 mb-6">
                <Heart className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-4xl font-light">{t("donations.title")}</h1>
              <div className="w-24 h-[2px] bg-amber-600/50 mx-auto my-4"></div>
              <p className="text-neutral-300 max-w-2xl mx-auto">{t("donations.subtitle")}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="bg-neutral-900/80 border border-neutral-800 rounded-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-semibold">{t("donations.makeTitle")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div>
                  <Label className="text-sm font-medium text-neutral-200 mb-3 block">
                    {t("donations.selectAmount")}
                  </Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((preAmount) => (
                      <Button
                        key={preAmount}
                        variant={amount === preAmount.toString() ? "default" : "outline"}
                        onClick={() => setAmount(preAmount.toString())}
                        className={`h-12 font-semibold ${
                          amount === preAmount.toString()
                            ? "bg-amber-600 hover:bg-amber-700 text-white"
                            : "bg-neutral-900/60 border-neutral-800 text-neutral-200 hover:border-amber-600/40"
                        }`}
                      >
                        ${preAmount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm font-medium text-neutral-200">
                      {t("donations.customAmount")}
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="$0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-2 h-12 bg-neutral-900 text-white border-neutral-800 focus-visible:ring-amber-600 placeholder:text-neutral-500"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-neutral-200 mb-3 block">
                    {t("donations.paymentMethod")}
                  </Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div
                      className={`flex items-center gap-3 p-4 border rounded-md ${
                        paymentMethod === "card"
                          ? "border-amber-600/40 bg-neutral-900"
                          : "border-neutral-800 bg-neutral-900/60"
                      }`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <div className="p-2 rounded-md bg-neutral-800">
                        <CreditCard className="h-5 w-5 text-neutral-200" />
                      </div>
                      <Label htmlFor="card" className="text-neutral-200">
                        {t("donations.creditCard")}
                      </Label>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-4 border rounded-md ${
                        paymentMethod === "transfer"
                          ? "border-amber-600/40 bg-neutral-900"
                          : "border-neutral-800 bg-neutral-900/60"
                      }`}
                    >
                      <RadioGroupItem value="transfer" id="transfer" />
                      <div className="p-2 rounded-md bg-neutral-800">
                        <Building className="h-5 w-5 text-neutral-200" />
                      </div>
                      <Label htmlFor="transfer" className="text-neutral-200">
                        {t("donations.bankTransfer")}
                      </Label>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-4 border rounded-md ${
                        paymentMethod === "mobile"
                          ? "border-amber-600/40 bg-neutral-900"
                          : "border-neutral-800 bg-neutral-900/60"
                      }`}
                    >
                      <RadioGroupItem value="mobile" id="mobile" />
                      <div className="p-2 rounded-md bg-neutral-800">
                        <Smartphone className="h-5 w-5 text-neutral-200" />
                      </div>
                      <Label htmlFor="mobile" className="text-neutral-200">
                        {t("donations.mobilePay")}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full h-12 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white">
                  {t("donations.donateButton")} ${amount || "0"}
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-neutral-900/80 border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">{t("donations.impact")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-md bg-neutral-900 border border-neutral-800">
                    <div className="w-3 h-3 rounded-full bg-neutral-500" />
                    <span className="text-neutral-200">{t("donations.communityPrograms")}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-md bg-amber-700/15 border border-amber-700/30">
                    <div className="w-3 h-3 rounded-full bg-amber-600" />
                    <span className="text-neutral-200">{t("donations.familyHelp")}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-md bg-neutral-900 border border-neutral-800">
                    <div className="w-3 h-3 rounded-full bg-neutral-500" />
                    <span className="text-neutral-200">{t("donations.templeMaintenance")}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-md bg-neutral-900 border border-neutral-800">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-neutral-200">{t("donations.youthPrograms")}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/80 border border-neutral-800">
                <CardContent className="pt-8">
                  <div className="text-center p-6 rounded-md bg-neutral-900 border border-neutral-800">
                    <blockquote className="text-neutral-200 italic mb-2">"{t("donations.verse")}"</blockquote>
                    <cite className="text-sm text-neutral-400 font-semibold">{t("donations.verseRef")}</cite>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/80 border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">{t("donations.contactTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    {t("donations.contactDesc")}
                    <span className="font-semibold text-amber-400"> (555) 123-4567</span> {t("donations.contactEmail")}
                    <span className="font-semibold text-amber-400"> donaciones@iglesia.com</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function DonationsPage() {
  return (
    <LanguageProvider>
      <DonationsPageContent />
    </LanguageProvider>
  )
}
