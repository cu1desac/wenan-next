'use client';

import { Avatar } from '@nextui-org/avatar';
import { Input } from '@nextui-org/input';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { useState } from 'react';

export default function AuthorMenuAdd() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState('');
  const [avatarSrc, setAvatarSrc] = useState('https://i2.hdslb.com/bfs/face/153d3514e34987804d04b926ff762f3f0807c924.jpg');
  return (
    <div>
      <Button onPress={onOpen}>添加</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">添加作者</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <div>
                    <Input
                      isRequired
                      isClearable
                      type="text"
                      label="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onClear={() => setName('')}
                    />
                  </div>
                  <div>
                    <div>name:</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Avatar size="lg" src={avatarSrc} />
                    </div>
                    <Input
                      isRequired
                      isClearable
                      type="url"
                      label="avatar url"
                      value={avatarSrc}
                      onChange={e => setAvatarSrc(e.target.value)}
                      onClear={() => setAvatarSrc('')}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  );
}
