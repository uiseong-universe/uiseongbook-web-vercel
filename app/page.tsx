import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Heart, Sparkles, Target, Lightbulb, MessageCircle, Mic, BookOpen, Shield } from "lucide-react"

export default function HomePage() {
  const projectGoals = [
    {
      title: "세대 간 연결",
      description: "어르신들의 이야기를 기록해 청년 세대의 공감과 관심 유도",
      icon: Users,
      color: "orange",
    },
    {
      title: "정서적 돌봄",
      description: "대화 기록 기능으로 외로움 완화, 자기 성찰과 관계 형성 촉진",
      icon: Heart,
      color: "red",
    },
    {
      title: "로컬 브랜딩",
      description: "주민 개개인을 '살아 있는 문화유산'으로 아카이빙",
      icon: BookOpen,
      color: "pink",
    },
    {
      title: "디지털 돌봄 실험",
      description: "기술과 복지를 결합한 새로운 지역 돌봄 모델 제시",
      icon: Shield,
      color: "purple",
    },
  ]

  const mainFeatures = [
    {
      title: "주민 간 대화 기록",
      description: "실제 대화를 기반으로 도감 자동 생성",
      icon: MessageCircle,
      color: "orange",
    },
    {
      title: "주민–AI 대화 기록",
      description: "AI와의 대화를 통해 추억과 생각을 정리",
      icon: Sparkles,
      color: "red",
    },
    {
      title: "생애주기 녹음 기능",
      description: "10대부터 현재까지 삶의 여정을 음성으로 기록",
      icon: Mic,
      color: "pink",
    },
  ]

  const expectedEffects = [
    "정서적 돌봄: 외로움 완화, 자기 성찰 기회 제공",
    "세대 간 소통: 청년–어르신 간 공감대 형성",
    "스토리 아카이빙: 개인의 이야기를 의성의 문화유산으로 보존",
    "복지 활용성: 기록 데이터를 지역 복지 정책에 활용",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            Us:Code 청년개발자 아카데미 1기
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            의성도감
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-100">청년개발자들의 의성 살아보기 프로젝트</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-orange-50 leading-relaxed">
            "핸드폰을 켜고, 단 두 번의 터치로 우리의 이야기가 기록됩니다."
            <br />
            어르신들의 삶과 추억을 기록하고 공유하는 디지털 돌봄 플랫폼
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dogam">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50 font-semibold text-lg px-8 py-4">
                <Sparkles className="mr-2 h-5 w-5" />
                도감 보러가기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16 container mx-auto px-4">
        <Card className="border-orange-200 shadow-lg mb-16">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-gray-800 flex items-center justify-center">
              <Lightbulb className="mr-3 h-6 w-6 text-orange-500" />
              기획 배경
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <p className="text-xl md:text-2xl font-medium text-orange-600 mb-4">
                "반려동물과 대화한다", "이웃 간 싸우던 소리도 그립다"
              </p>
              <p className="text-lg md:text-xl text-gray-600">
                의성 어르신들의 이 말씀은 곧 외로움의 표현이며,
                <br />
                지역사회가 해결해야 할 중요한 과제입니다.
              </p>
            </div>
            <p className="text-lg md:text-xl">
              일본 '아저씨도감'이 세대 간 소통을 이끌어낸 것처럼, 저희는 한 걸음 더 나아가 어르신들의 삶과 추억을
              기록하고 공유하는
              <strong className="text-orange-600"> 디지털 돌봄 플랫폼</strong>을 기획했습니다.
            </p>
          </CardContent>
        </Card>

        {/* Project Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">장소</h3>
              <p className="text-base text-gray-600">경북 의성군 점곡면</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-red-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">대상</h3>
              <p className="text-base text-gray-600">전국 청년 개발자</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-pink-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">기간</h3>
              <p className="text-base text-gray-600">2025.8.4 ~ 8.29 (4주)</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">주최</h3>
              <p className="text-base text-gray-600">Us:Code</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">프로젝트 목적</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectGoals.map((goal, index) => {
              const IconComponent = goal.icon
              return (
                <Card key={index} className={`border-${goal.color}-200 hover:shadow-lg transition-shadow`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-${goal.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className={`h-6 w-6 text-${goal.color}-500`} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{goal.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{goal.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 container mx-auto px-4">
        <Card className="border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-gray-800 flex items-center justify-center">
              <Target className="mr-3 h-6 w-6 text-red-500" />
              의성도감 주요 기능
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg md:text-xl text-gray-700 mb-8 font-medium bg-red-50 p-4 rounded-lg">
              "핸드폰을 켜고, 단 두 번의 터치로 우리의 이야기가 기록됩니다."
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {mainFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className={`border-${feature.color}-200 hover:border-${feature.color}-300 transition-colors`}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className={`h-8 w-8 text-${feature.color}-500`} />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                      <p className="text-base md:text-lg text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Expected Effects */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Card className="border-pink-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-gray-800 flex items-center justify-center">
                <Sparkles className="mr-3 h-6 w-6 text-pink-500" />
                기대 효과
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {expectedEffects.map((effect, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-500 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700">{effect}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Planner's Message */}
      <section className="py-16 container mx-auto px-4">
        <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-gray-800 flex items-center justify-center">
              <Heart className="mr-3 h-6 w-6 text-orange-500" />
              기획자의 말
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">"기록은 곧 돌봄입니다."</p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              어르신들이 자신의 삶을 말하고 존중받는 순간, 그것이 곧 돌봄이 됩니다.
              <br />
              청년들은 그 이야기를 기록하며 지역과 연결되고,
              <br />
              의성도감은 사람과 사람을 잇는 다리가 될 것입니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">함께 만들어가는 의성 이야기</h2>
          <p className="text-xl mb-8 text-orange-100">어르신들의 삶을 기록하고, 세대를 잇는 특별한 여정에 참여하세요</p>
          <Link href="/dogam">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50 font-semibold text-lg px-8 py-4">
              <Sparkles className="mr-2 h-5 w-5" />
              의성도감 둘러보기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
