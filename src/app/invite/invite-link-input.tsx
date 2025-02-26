import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link size={20} />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/1234-5678-90"
      />

      <IconButton className="-mr-2">
        <Copy size={20} />
      </IconButton>
    </InputRoot>
  )
}
