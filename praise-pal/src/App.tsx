import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge';
import { TypographyH1, TypographyH2, TypographyH4 } from '@/components/ui/typography'

function App() {
  const maxReviewLength = 256;

  function handleReviewClassification() {
    // Hint: In order to change the color for the component based on the classification 
    // result (from the binary classifier), update the occurences of the `cn` function
    // in the template below with a conditional expression inside.

    throw new Error('Function not implemented');
  }

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='grid grid-cols-12 gap-y-10'>
          <div className='col-start-4 col-end-10 flex flex-col'>
            <TypographyH1 className='pb-2'>
              <span>praise</span>
              <span className={cn('transition-colors duration-300 text-primary')}>Pal</span>
            </TypographyH1>
            <TypographyH2 className='border-none flex gap-x-2'>
              <span>sincerely, praise your</span>
              <span className={cn('transition-colors duration-300 text-primary')}>colleagues, your manager, or yourself</span>
            </TypographyH2>
          </div>
          <div className='col-start-4 col-end-10 flex justify-between items-center'>
            <div className="flex gap-x-2">
              <TypographyH4>Your review seems to denote:</TypographyH4>
              {/* Replace the Badge text with the label from the inference process */}
              <Badge className={cn('bg-primary')}>tired i need a coffee</Badge>
            </div>
            <Button 
              className={cn('bg-primary')}
              onClick={handleReviewClassification}
            >
              Run inference for your review
            </Button>
          </div>
          <Textarea 
            maxLength={maxReviewLength}
            placeholder='Enter performance review'
            style={{resize: 'none'}}
            className='col-start-4 col-end-10 flex' 
          />
        </div>
      </div>
    </>
  )
}

export default App
