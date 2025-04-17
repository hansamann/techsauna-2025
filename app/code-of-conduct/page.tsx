'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Nav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Code of Conduct</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                All participants of Munich Tech Sauna are expected to abide by our Code of Conduct, both online and during in-person events that are hosted and/or associated with Munich Tech Sauna.
              </p>
              <p className="text-gray-300">
                Munich Tech Sauna meetups are not co-organized with the public saunas that we go to. For enforcement of this Code of Conduct, we only have official authority of the online spaces we are using for communication and the activities we organise. With everything else, we will try to work on enforcement with the sauna staff and local authorities. The saunas we go to are spaces used by non-participants as well, please don&apos;t assume that everyone has read or will follow this Code of Conduct.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Attribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                This Code of Conduct is adapted from dev.to. We also got inspired and adapted a lot from codefreeze.fi and SoCraTes. Thx all!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Why we have a Code of Conduct</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our goal is to organize casual gatherings where everyone can engage in learning, teaching, sharing, networking, and enjoying themselves. Achieving this requires inclusivity for all participants and the establishment of a welcoming and secure environment. We appreciate open discussions and even disagreements, acknowledging that they may become intense. To maintain a positive atmosphere, we have established rules and set clear boundaries, outlined in this Code of Conduct.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">General (German) Sauna Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li><strong>No sweat on wood:</strong> Bring a large towel and if you like to cover your body bring a second towel so your feet do not touch the bench.</li>
                <li><strong>Respect quiet infusions:</strong> During the infusions, it&apos;s advised to stay calm and refrain from conversations. You can talk again once we exit the sauna and hang out in the community areas.</li>
                <li><strong>No gadgets:</strong> The sauna rules in many places prohibit the use of electronic devices with cameras - let&apos;s respect this for the privacy of all of us.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">The Pledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                In the interest of fostering an open and welcoming environment, we pledge to make participation in our meetups, activities and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">A Safe Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">We aim to create a safe environment by:</p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-6">
                <li>Using welcoming and inclusive language</li>
                <li>Being respectful of differing viewpoints and experiences</li>
                <li>Gracefully accepting constructive criticism</li>
                <li>Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain</li>
                <li>Admit when you do not know something. Encourage others to admit when they do not know something—and never joke about it. We are all here to learn.</li>
                <li>Be careful with jokes. We do not tolerate any CoC violations, even if &quot;it was just a joke&quot;.</li>
              </ul>
              <p className="text-gray-300 mb-4">Examples of unacceptable behaviour include:</p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Trolling, insulting/derogatory comments, public or private harassment</li>
                <li>Publishing others&apos; private information, such as a physical or electronic address, without explicit permission</li>
                <li>Not being respectful to reasonable communication boundaries, such as &apos;please leave me alone,&apos; &apos;please go away,&apos; or &apos;I&apos;m sorry, I&apos;m not discussing this with you.&apos;</li>
                <li>The usage of sexualised language or imagery and unwelcome sexual attention or advances</li>
                <li>Swearing, usage of strong or disturbing language</li>
                <li>Demonstrating the graphics or any other content you know may be considered disturbing</li>
                <li>Initiating or endorsing political conversations that deviate from our inclusive or democratic principles.</li>
                <li>Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual identity and orientation</li>
                <li>Attacking personal tastes</li>
                <li>Other conduct which you know could reasonably be considered inappropriate in a professional setting.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Enforcement & Violations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                If you think someone has violated our code of conduct—even if you were not directly involved, like you just overheard a conversation—please:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-6">
                <li>Let the person know that what they did is not appropriate and ask them to stop.</li>
                <li>Contact the organiser of Munich Tech Sauna (see contact details below).</li>
              </ul>
              <p className="text-gray-300 mb-4">
                But please give people the benefit of doubt. If there is even a slight chance that this was a misunderstanding (e.g. the person did not speak in their native language, and did not find the right words), try to sort it out in a friendly, constructive way.
              </p>
              <p className="text-gray-300 mb-4">
                Violations of the Code of Conduct may be reported by sending an email to the organiser <a href="mailto:techsauna@nopants.dev" className="text-pink-500 hover:text-pink-400">Sven Haiges (he/him)</a> or our member <a href="mailto:lbauer@magenta.de" className="text-pink-500 hover:text-pink-400">Lena Bauer (she/her)</a>. All reports will be reviewed and investigated. We will hear both sides and then take action we deem appropriate such as:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Give a warning</li>
                <li>Have a longer talk about our values</li>
                <li>Exclude the perpetrator from the current and/or future meetups</li>
                <li>Remove / block the perpetrator from our online communities</li>
                <li>Call the authorities</li>
              </ul>
              <p className="text-gray-300 mt-6">
                We hold the right and responsibility to remove comments or other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any members for other behaviours that they deem inappropriate, threatening, offensive, or harmful.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
} 