import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"

export const CreateTaskForm: React.FC = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {/* Trigger é o gatilho que abre o modal */}
                <Button>
                    <PlusIcon /> Nova Tarefa
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth={"32rem"}>
                <Dialog.Title>Criar Tarefa</Dialog.Title>
                <Dialog.Description size={"2"} mb="4">Crie uma nova tarefa</Dialog.Description>

                <form>
                    <Flex direction={"column"} gap={"4"}>
                        <Box maxWidth={"32rem"}>
                            <Box mb={"2"}>
                                <Text as="label" htmlFor="title">Título</Text>
                            </Box>
                            <TextField.Root placeholder="Defina um título" name="title" id="title" autoFocus required />
                        </Box>
                        <Box maxWidth={"32rem"}>
                            <Box mb={"2"}>
                                <Text as="label" htmlFor="description">Description</Text>
                            </Box>
                            <TextArea placeholder="Descreva a tarefa" name="description" id="description" />
                        </Box>
                        <Flex gap={"2"}>
                            <Box>
                                <Text as="div" mb="2">Situação</Text>
                                <RadioGroup.Root name="status" defaultValue="todo" orientation="horizontal">
                                    <RadioGroup.Item value="todo">
                                        Para fazer
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="doing">
                                        Em progresso
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="done">
                                        Concluída
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>
                            <Box>
                                <Text as="div" mb="2">Prioridade</Text>
                                <RadioGroup.Root name="priority" defaultValue="low">
                                    <RadioGroup.Item value="low">
                                        Baixa
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="medium">
                                        Média
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="high">
                                        Alta
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                        </Flex>
                        <Box>

                        </Box>

                        <Flex gap="2" justify={"end"}>
                            <Dialog.Close>
                                <Button variant={"soft"} color={"gray"}>Cancelar</Button>
                            </Dialog.Close>
                            <Button type={"submit"}>
                                Criar Tarefa
                            </Button>
                        </Flex>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}