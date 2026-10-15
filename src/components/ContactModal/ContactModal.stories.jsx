import { expect, fireEvent, fn } from 'storybook/test';
import ContactModal from './ContactModal';

const meta = {
  component: ContactModal,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
    // The modal covers the viewport, so give each docs preview room to show it.
    docs: { story: { inline: false, height: '640px' } },
  },
  argTypes: {
    isOpen: {
      description: 'Whether the dialog is shown. While `false` the component renders nothing.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    onClose: {
      description: 'Called on Escape, on the "Close" button or on a click on the backdrop. The parent should set `isOpen` to `false`.',
      table: { type: { summary: '() => void' } },
    },
  },
  args: { isOpen: true, onClose: fn() },
};

export default meta;

/** Open dialog. Focus moves to the first link and stays trapped inside while it is open. */
export const Open = {
  play: async ({ canvas }) => {
    const dialog = canvas.getByRole('dialog', { name: /contact me for more/i });
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    // The modal moves focus to its first link when it opens.
    await expect(canvas.getByRole('link', { name: /email/i })).toHaveFocus();
  },
};

/** Pressing Escape calls `onClose`. */
export const ClosesOnEscape = {
  play: async ({ args, userEvent }) => {
    await userEvent.keyboard('{Escape}');
    await expect(args.onClose).toHaveBeenCalled();
  },
};

/** Focus trap: Shift+Tab on the first link jumps to "Close", and Tab on "Close" returns to the first link. */
export const FocusTrap = {
  play: async ({ canvas, userEvent }) => {
    const firstLink = canvas.getByRole('link', { name: /email/i });
    const closeButton = canvas.getByRole('button', { name: /^close$/i });
    await expect(firstLink).toHaveFocus();
    await userEvent.tab({ shift: true });
    await expect(closeButton).toHaveFocus();
    await userEvent.tab();
    await expect(firstLink).toHaveFocus();
  },
};

/** A click on the backdrop calls `onClose`; a click inside the panel does not. */
export const ClosesOnBackdropClick = {
  play: async ({ args, canvas }) => {
    await fireEvent.click(canvas.getByText(/designer by day/i));
    await expect(args.onClose).not.toHaveBeenCalled();
    // The dialog element is the backdrop; the panel sits inside it.
    await fireEvent.click(canvas.getByRole('dialog'));
    await expect(args.onClose).toHaveBeenCalledOnce();
  },
};

/** The "Close" button calls `onClose`. */
export const ClosesWithButton = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^close$/i }));
    await expect(args.onClose).toHaveBeenCalledOnce();
  },
};

/** With `isOpen` set to `false` nothing is rendered. */
export const Closed = {
  args: { isOpen: false },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};
