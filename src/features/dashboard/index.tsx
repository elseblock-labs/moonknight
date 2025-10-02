import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Dashboard() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-light'>Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-normal text-muted-foreground'>
              Metric One
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-light'>$0.00</div>
            <p className='text-xs text-muted-foreground'>
              Description text
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-normal text-muted-foreground'>
              Metric Two
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-light'>0</div>
            <p className='text-xs text-muted-foreground'>
              Description text
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-normal text-muted-foreground'>
              Metric Three
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-light'>0</div>
            <p className='text-xs text-muted-foreground'>
              Description text
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-normal text-muted-foreground'>
              Metric Four
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-light'>0</div>
            <p className='text-xs text-muted-foreground'>
              Description text
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Area */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle className='font-normal'>Content Section</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <div className='h-[300px] flex items-center justify-center text-muted-foreground'>
              Add your chart or content here
            </div>
          </CardContent>
        </Card>

        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle className='font-normal'>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className='flex items-center gap-4'>
                  <div className='h-9 w-9 rounded-full bg-muted' />
                  <div className='flex-1 space-y-1'>
                    <div className='h-3 w-3/4 bg-muted rounded' />
                    <div className='h-2 w-1/2 bg-muted rounded' />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
