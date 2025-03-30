
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Legend,
  Tooltip
} from 'recharts';
import { Award, BookOpen, CircleDollarSign, Users, MapPin, Church } from 'lucide-react';

const Impact = () => {
  // Sample data for charts and metrics
  const savingsData = [
    { name: '2020', value: 230 },
    { name: '2021', value: 450 },
    { name: '2022', value: 670 },
    { name: '2023', value: 890 }
  ];

  const educationData = [
    { name: 'Primary', students: 5400 },
    { name: 'Secondary', students: 3200 },
    { name: 'Vocational', students: 2100 },
    { name: 'Higher Ed', students: 1500 }
  ];

  const incomeData = [
    { month: 'Jan', income: 2500 },
    { month: 'Feb', income: 3500 },
    { month: 'Mar', income: 4200 },
    { month: 'Apr', income: 3800 },
    { month: 'May', income: 5100 },
    { month: 'Jun', income: 5800 }
  ];

  const empowermentData = [
    { name: 'Leadership Roles', value: 35 },
    { name: 'Business Ownership', value: 40 },
    { name: 'Education Access', value: 15 },
    { name: 'Healthcare Access', value: 10 }
  ];

  // New data for operational statistics
  const operationalData = [
    { name: 'Cities', count: 47 },
    { name: 'Churches', count: 135 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Impact</h1>
              <p className="text-white/90 text-lg md:text-xl">
                Measuring how our work transforms communities through savings groups, education initiatives, 
                income generation projects, and women's empowerment programs.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="savings" className="data-[state=active]:bg-primary data-[state=active]:text-white">Savings Groups</TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-white">Education</TabsTrigger>
              <TabsTrigger value="income" className="data-[state=active]:bg-primary data-[state=active]:text-white">Income Generation</TabsTrigger>
              <TabsTrigger value="empowerment" className="data-[state=active]:bg-primary data-[state=active]:text-white">Women Empowerment</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab Content */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Savings Groups</CardTitle>
                    <Users className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">890</div>
                    <p className="text-sm text-muted-foreground">Active Groups</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Target: 1000</span>
                        <span>89%</span>
                      </div>
                      <Progress value={89} />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Education</CardTitle>
                    <BookOpen className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12,200</div>
                    <p className="text-sm text-muted-foreground">Students Supported</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Target: 15,000</span>
                        <span>81%</span>
                      </div>
                      <Progress value={81} />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Income Generation</CardTitle>
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$4.2M</div>
                    <p className="text-sm text-muted-foreground">Generated Income</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Target: $5M</span>
                        <span>84%</span>
                      </div>
                      <Progress value={84} />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Women Empowerment</CardTitle>
                    <Award className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">8,500</div>
                    <p className="text-sm text-muted-foreground">Women Empowered</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Target: 10,000</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Impact Growth Trends</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer config={{}} className="h-full">
                      <LineChart data={savingsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" name="Savings Groups" />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Operational Reach in India</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {operationalData.map((item) => (
                        <div key={item.name} className="flex flex-col items-center justify-center text-center p-4 border border-border/30 rounded-lg h-full">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            {item.name === 'Cities' ? (
                              <MapPin className="h-8 w-8 text-primary" />
                            ) : (
                              <Church className="h-8 w-8 text-primary" />
                            )}
                          </div>
                          <div className="text-4xl font-bold text-primary mb-2">{item.count}</div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.name === 'Cities' ? 'Communities served across India' : 'Churches reached through our programs'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Savings Groups Tab Content */}
            <TabsContent value="savings" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Savings Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">890</div>
                    <p className="text-sm text-muted-foreground">Across 120 communities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Total Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">15,430</div>
                    <p className="text-sm text-muted-foreground">68% women participation</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Total Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">$1.8M</div>
                    <p className="text-sm text-muted-foreground">Average $118 per member</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Savings Groups Growth</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <div className="h-[400px] w-full">
                    <ChartContainer config={{}} className="h-full w-full">
                      <BarChart data={savingsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend wrapperStyle={{ paddingTop: 20 }} />
                        <Bar dataKey="value" name="Number of Groups" fill="#00C49F" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab Content */}
            <TabsContent value="education" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Students Supported</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">12,200</div>
                    <p className="text-sm text-muted-foreground">53% girls</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Schools Built</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">45</div>
                    <p className="text-sm text-muted-foreground">Across 28 communities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Teachers Trained</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">520</div>
                    <p className="text-sm text-muted-foreground">Enhanced quality education</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Education Distribution</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <div className="h-[400px] w-full">
                    <ChartContainer config={{}} className="h-full w-full">
                      <BarChart data={educationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend wrapperStyle={{ paddingTop: 20 }} />
                        <Bar dataKey="students" name="Number of Students" fill="#0088FE" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Income Generation Tab Content */}
            <TabsContent value="income" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Income Generated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">$4.2M</div>
                    <p className="text-sm text-muted-foreground">Through 320 business ventures</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Small Businesses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">720</div>
                    <p className="text-sm text-muted-foreground">65% women-owned</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Avg Income Increase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">213%</div>
                    <p className="text-sm text-muted-foreground">From before intervention</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Monthly Income Trends</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <div className="h-[400px] w-full">
                    <ChartContainer config={{}} className="h-full w-full">
                      <LineChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend wrapperStyle={{ paddingTop: 20 }} />
                        <Line 
                          type="monotone" 
                          dataKey="income" 
                          stroke="#FFBB28" 
                          strokeWidth={2}
                          name="Average Monthly Income ($)"
                          dot={{ stroke: '#FFBB28', strokeWidth: 2, r: 4, fill: '#fff' }}
                          activeDot={{ r: 6, stroke: '#FFBB28', strokeWidth: 2, fill: '#fff' }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Women's Empowerment Tab Content */}
            <TabsContent value="empowerment" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Women in Leadership</CardTitle>
                      <Award className="h-5 w-5 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">2,970</div>
                      <p className="text-sm text-muted-foreground">Community leaders trained</p>
                      <div className="mt-4">
                        <Progress value={75} />
                        <p className="text-xs text-right mt-1">75% of target</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Women-Owned Businesses</CardTitle>
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">3,400</div>
                      <p className="text-sm text-muted-foreground">Businesses started or expanded</p>
                      <div className="mt-4">
                        <Progress value={85} />
                        <p className="text-xs text-right mt-1">85% of target</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Empowerment Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ChartContainer config={{}} className="h-full">
                      <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <Pie
                          data={empowermentData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {empowermentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Women's Empowerment Initiatives</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center p-4 border border-border/30 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Leadership Training</h3>
                      <p className="text-sm text-muted-foreground">Equipping 3,000+ women with leadership skills</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-border/30 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <CircleDollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Business Grants</h3>
                      <p className="text-sm text-muted-foreground">$2.1M distributed to women entrepreneurs</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-border/30 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Educational Scholarships</h3>
                      <p className="text-sm text-muted-foreground">1,500 scholarships provided for girls and women</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;
