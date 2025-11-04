import Card from "@components/Card";
import { BlueOutlinedButton } from "@components/Buttons";
import StatTileRow from "@components/statusTile/StatTileRow";
import DrugsUploadedTile from "@components/DrugsUploadedTile";
import DrugOverview from "@components/drugOverview/DrugOverview";
import { CurvedLinePlot, LinearLinePlot } from "@components/charts/lineChartPlot";
import PharmacistOverview from "@components/pharmacistOverview/PharmacistOverview";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <StatTileRow/>
        <div className='flex'>
          <div className='flex flex-col w-[62.4375rem] gap-y-[3.8125rem] pr-[3.0625rem]'>

            {/* The first card component */}
            <Card className='pt-[3.875rem]'>
              <div className='flex flex-col px-[1.5625rem] items-start gap-y-[.8125rem] mb-[1.5625rem]'>
                <div className='flex w-full justify-between'>
                  <h2 className='font-bold text-[1.75rem] leading-[2.5rem]'>Uploads over time</h2>
                  <BlueOutlinedButton
                    icon="/svgs/root/share.svg"
                    className='rounded-full'
                  />
                </div>
                <h4 className='text-[1rem] tracking-[0.03125rem] leading-[1.4375rem] roboto-font text-pharmacistOverviewText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, obcaecati temporibus neque in quam quas earum! Saepe,</h4>
              </div>
              <CurvedLinePlot/>
            </Card>

            {/* The second card component */}
            <Card className='flex flex-col'>
              <div className='flex w-full justify-between pl-[5.25rem] pr-[1.4375rem] mt-[1.375rem]'>
                <DrugsUploadedTile
                  change='2.45%'
                  changeSign="+"
                  quantity="2458"
                  title='Total Drugs Uploaded'
                />
                <BlueOutlinedButton
                  icon='/svgs/root/analytics.svg'
                />
              </div>
              <LinearLinePlot/>
            </Card>
          </div>
          <div className='flex flex-col gap-y-[2.8125rem]'>
            <DrugOverview/>
            <PharmacistOverview contributions={230}/>
          </div>
        </div>
      </main>
    </>
  );
}
